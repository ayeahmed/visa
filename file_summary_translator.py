import os
import base64
import PyPDF2
import requests
from googletrans import Translator, LANGUAGES

def encode_image(image_path):
    with open(image_path, "rb") as image_file:
        return base64.b64encode(image_file.read()).decode('utf-8')

def extract_text_from_pdf(pdf_path):
    with open(pdf_path, 'rb') as file:
        reader = PyPDF2.PdfReader(file)
        text = ''
        for page in reader.pages:
            text += page.extract_text()
    return text

def process_with_chatgpt(content, keywords, question, is_image=False):
    api_key = "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"
    api_url = "https://api.openai.com/v1/chat/completions"
    
    headers = {
        "Content-Type": "application/json",
        "Authorization": f"Bearer {api_key}"
    }
    
    if is_image:
        instruction = f"Please analyze this image considering the following keywords: {keywords}. Then answer this question: {question}"
        messages = [
            {
                "role": "user",
                "content": [
                    {"type": "text", "text": instruction},
                    {
                        "type": "image_url",
                        "image_url": f"data:image/jpeg;base64,{content}"
                    }
                ]
            }
        ]
        model = "gpt-4-vision-preview"
    else:
        instruction = f"Please analyze the following text considering these keywords: {keywords}. Then answer this question: {question}\n\nText: {content}"
        messages = [
            {"role": "system", "content": "You are a helpful assistant that analyzes text based on given keywords and questions."},
            {"role": "user", "content": instruction}
        ]
        model = "gpt-4-turbo-preview"
    
    payload = {
        "model": model,
        "messages": messages,
        "max_tokens": 500
    }
    
    response = requests.post(api_url, headers=headers, json=payload)
    return response.json()['choices'][0]['message']['content']

def translate_text(text, target_language):
    translator = Translator()
    translation = translator.translate(text, dest=target_language)
    return translation.text

def process_file(file_path, keywords, question, target_language):
    _, file_extension = os.path.splitext(file_path)
    
    if file_extension.lower() in ['.jpg', '.jpeg', '.png']:
        base64_image = encode_image(file_path)
        summary = process_with_chatgpt(base64_image, keywords, question, is_image=True)
    elif file_extension.lower() == '.pdf':
        text = extract_text_from_pdf(file_path)
        summary = process_with_chatgpt(text, keywords, question)
    else:
        raise ValueError("Unsupported file type. Please use .jpg, .jpeg, .png, or .pdf files.")

    translated_summary = translate_text(summary, target_language)
    return summary, translated_summary

def get_user_input():
    print("Available languages:")
    for code, lang in LANGUAGES.items():
        print(f"{code}: {lang}")
    
    while True:
        target_language = input("Enter the target language code: ").lower()
        if target_language in LANGUAGES:
            break
        print("Invalid language code. Please try again.")
    
    keywords = input("Enter keywords (comma-separated): ")
    question = input("Enter your question about the file: ")
    file_path = input("Enter the path to your file (image or PDF): ")
    #find a way to just upload file in terminal instead of path unless we have a working u
    
    return target_language, keywords, question, file_path

def main():
    target_language, keywords, question, file_path = get_user_input()
    
    try:
        original_summary, translated_summary = process_file(file_path, keywords, question, target_language)
        
        print("\nOriginal Summary:")
        print(original_summary)
        print("\nTranslated Summary:")
        print(translated_summary)
    except Exception as e:
        print(f"An error occurred: {str(e)}")

if __name__ == "__main__":
    main()


#just in case front end doesn't work, make sure u can use file from path in