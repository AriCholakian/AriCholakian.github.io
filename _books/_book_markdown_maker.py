import requests
import re
import os

def search_open_library(query):
    base_url = "https://openlibrary.org/search.json"
    params = {
        'q': query,
        'limit': 1
    }
    
    try:
        response = requests.get(base_url, params=params)
        response.raise_for_status()
        data = response.json()
        
        if data['numFound'] > 0:
            return data['docs'][0]
        else:
            return None
    except requests.exceptions.RequestException as e:
        print(f"Error fetching data: {e}")
        return None

def sanitize_filename(title):
    safe_title = title.replace(' ', '_')
    safe_title = re.sub(r'[^\w\-]', '', safe_title)
    return f"{safe_title}.md"

def generate_markdown(book_data):
    """
    Generates the YAML frontmatter string and returns the title for the filename.
    """
    title = book_data.get('title', 'Unknown_Title')
    author_list = book_data.get('author_name', [])
    author = author_list[0] if author_list else ''
    released = book_data.get('first_publish_year', '')
    olid = book_data.get('cover_edition_key', '')
    if not olid:
        olid = book_data.get('key', '').replace('/works/', '')
    isbn_list = book_data.get('isbn', [])
    isbn = isbn_list[0] if isbn_list else ''
    # Format Output
    content = (
        "---\n"
        "layout: book-review\n"
        f"title: {title}\n"
        f"author: {author}\n"
        f"released: {released}\n"
        f"olid: {olid} # use Open Library ID to fetch cover (if no `cover` is provided)\n"
        f"isbn: {isbn} # use ISBN to fetch cover (if no `olid` is provided, dashes are optional)\n"
        "categories: \n"
        "tags: \n"
        "started: \n"
        "finished: \n"
        "status: Finished\n"
        "stars: 3\n"
        "---\n\n"

        "PLACEHOLDER"
    )
    return title, content

def main():
    print("Open Library Markdown Exporter")
    print("Enter a book title or ISBN (or 'q' to quit).")
    print("-" * 40)

    while True:
        user_input = input("\nEnter Book Query: ").strip()
        
        if user_input.lower() == 'q':
            break
        
        if not user_input:
            continue

        print(f"Searching for '{user_input}'...")
        book_data = search_open_library(user_input)
        
        if book_data:
            title, content = generate_markdown(book_data)
            filename = sanitize_filename(title)
            
            # Write to file
            try:
                with open(filename, "w", encoding="utf-8") as f:
                    f.write(content)
                print(f"Successfully exported to: {filename}")
                print(f"(Preview: Title='{title}', Author='{book_data.get('author_name', [''])[0]}')")
            except IOError as e:
                print(f"Error writing file: {e}")
        else:
            print("No results found.")

if __name__ == "__main__":
    main()