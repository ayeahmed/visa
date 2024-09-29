import os
import base64
import PyPDF2
import requests
from googletrans import Translator, LANGUAGES

translator = Translator()

def translate_text(text, target_language):
    translation = translator.translate(text, dest=target_language)
    return translation.text

def speak(text, language):
    translated_text = translate_text(text, language)
    print(f"{language.upper()}: {translated_text}")

def get_user_input(prompt, language):
    speak(prompt, language)
    return input()

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
        instruction = f"Please summarize this image considering this question: {question} Make sure it relates to these keywords: {keywords}."
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
        model = "gpt-4o"
    else:
        instruction = f"Please summarize the following text considering this question: {question}. Make sure it relates to these keywords: {keywords}\n\nText: {content}"
        messages = [
            {"role": "system", "content": "You are a helpful assistant that analyzes text based on given keywords and questions."},
            {"role": "user", "content": instruction}
        ]
        model = "gpt-4o"
    
    payload = {
        "model": model,
        "messages": messages,
        "max_tokens": 500
    }

    try:
        response = requests.post(api_url, headers=headers, json=payload)
        response.raise_for_status()  # Raises a HTTPError if the status is 4xx, 5xx
        
        response_data = response.json()
        
        if 'choices' not in response_data:
            print(f"Unexpected API response: {json.dumps(response_data, indent=2)}")
            raise ValueError("API response does not contain 'choices'")
        
        return response_data['choices'][0]['message']['content']
    except requests.exceptions.RequestException as e:
        print(f"API request failed: {e}")
        print(f"Response content: {response.text}")
        raise
    except (KeyError, IndexError) as e:
        print(f"Error parsing API response: {e}")
        print(f"Response content: {json.dumps(response_data, indent=2)}")
        raise
    except Exception as e:
        print(f"Unexpected error: {e}")
        raise



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

def get_user_language():
    print("Available languages:")
    for code, lang in LANGUAGES.items():
        print(f"{code}: {lang}")
    
    while True:
        target_language = input("Enter language code: ").lower()
        if target_language in LANGUAGES:
            return target_language
        print("Invalid language code. Please try again.")


def main():
    user_lang = get_user_language()

    keywords = get_user_input("Enter keywords (comma-separated):", user_lang)
    question = get_user_input("Enter your question about the file:", user_lang)
    file_path = get_user_input("Enter the path to your file (image or PDF):", user_lang)
    
    try:
        original_summary, translated_summary = process_file(file_path, keywords, question, user_lang)
        
        speak("Original Summary:", user_lang)
        print(original_summary)
        speak("Translated Summary:", user_lang)
        print(translated_summary)
    except FileNotFoundError as e:
        speak(f"Error: {str(e)}", user_lang)
    except Exception as e:
        speak(f"An error occurred: {str(e)}", user_lang)

if __name__ == "__main__":
    main()

