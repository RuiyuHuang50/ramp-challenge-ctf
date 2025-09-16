# Code Citations

## License: MIT
https://github.com/discoveryjs/jora/blob/8de1a4bdd99bff5772fc0be3e532770a583da6b8/docs/complex-examples.md

```
{"
```


## License: MIT
https://github.com/discoveryjs/jora/blob/8de1a4bdd99bff5772fc0be3e532770a583da6b8/docs/complex-examples.md

```
{"id": 1, "name":
```


## License: MIT
https://github.com/discoveryjs/jora/blob/8de1a4bdd99bff5772fc0be3e532770a583da6b8/docs/complex-examples.md

```
{"id": 1, "name": "Alice
```


## License: MIT
https://github.com/discoveryjs/jora/blob/8de1a4bdd99bff5772fc0be3e532770a583da6b8/docs/complex-examples.md

```
{"id": 1, "name": "Alice", "email": "alice@example
```


## License: MIT
https://github.com/discoveryjs/jora/blob/8de1a4bdd99bff5772fc0be3e532770a583da6b8/docs/complex-examples.md

```
{"id": 1, "name": "Alice", "email": "alice@example.com"},
```


## License: MIT
https://github.com/discoveryjs/jora/blob/8de1a4bdd99bff5772fc0be3e532770a583da6b8/docs/complex-examples.md

```
{"id": 1, "name": "Alice", "email": "alice@example.com"},
    {"id": 2,
```


## License: MIT
https://github.com/discoveryjs/jora/blob/8de1a4bdd99bff5772fc0be3e532770a583da6b8/docs/complex-examples.md

```
{"id": 1, "name": "Alice", "email": "alice@example.com"},
    {"id": 2, "name": "Bob", "email
```


## License: MIT
https://github.com/discoveryjs/jora/blob/8de1a4bdd99bff5772fc0be3e532770a583da6b8/docs/complex-examples.md

```
{"id": 1, "name": "Alice", "email": "alice@example.com"},
    {"id": 2, "name": "Bob", "email": "bob@example.com"}
```


## License: unknown
https://github.com/vishal-9878/Microservices-based-Application-with-Flask-Docker/blob/748c382c9bd19a942cd43bbdfdbd0a566667425f/user/app.py

```
("/users/
```


## License: unknown
https://github.com/vishal-9878/Microservices-based-Application-with-Flask-Docker/blob/748c382c9bd19a942cd43bbdfdbd0a566667425f/user/app.py

```
("/users/<int:user_id>", methods
```


## License: unknown
https://github.com/vishal-9878/Microservices-based-Application-with-Flask-Docker/blob/748c382c9bd19a942cd43bbdfdbd0a566667425f/user/app.py

```
("/users/<int:user_id>", methods=["GET"])
def get_
```


## License: unknown
https://github.com/vishal-9878/Microservices-based-Application-with-Flask-Docker/blob/748c382c9bd19a942cd43bbdfdbd0a566667425f/user/app.py

```
("/users/<int:user_id>", methods=["GET"])
def get_user(user_id):
    
```


## License: unknown
https://github.com/vishal-9878/Microservices-based-Application-with-Flask-Docker/blob/748c382c9bd19a942cd43bbdfdbd0a566667425f/user/app.py

```
("/users/<int:user_id>", methods=["GET"])
def get_user(user_id):
    user = next((u for u in
```


## License: unknown
https://github.com/vishal-9878/Microservices-based-Application-with-Flask-Docker/blob/748c382c9bd19a942cd43bbdfdbd0a566667425f/user/app.py

```
("/users/<int:user_id>", methods=["GET"])
def get_user(user_id):
    user = next((u for u in users if u["id"] == user
```


## License: unknown
https://github.com/vishal-9878/Microservices-based-Application-with-Flask-Docker/blob/748c382c9bd19a942cd43bbdfdbd0a566667425f/user/app.py

```
("/users/<int:user_id>", methods=["GET"])
def get_user(user_id):
    user = next((u for u in users if u["id"] == user_id), None)
    if
```


## License: unknown
https://github.com/vishal-9878/Microservices-based-Application-with-Flask-Docker/blob/748c382c9bd19a942cd43bbdfdbd0a566667425f/user/app.py

```
("/users/<int:user_id>", methods=["GET"])
def get_user(user_id):
    user = next((u for u in users if u["id"] == user_id), None)
    if user:
        return jsonify
```


## License: unknown
https://github.com/vishal-9878/Microservices-based-Application-with-Flask-Docker/blob/748c382c9bd19a942cd43bbdfdbd0a566667425f/user/app.py

```
("/users/<int:user_id>", methods=["GET"])
def get_user(user_id):
    user = next((u for u in users if u["id"] == user_id), None)
    if user:
        return jsonify(user)
    else:
        return jsonify({"error": "User not found"}), 404
```


## License: unknown
https://github.com/vishal-9878/Microservices-based-Application-with-Flask-Docker/blob/748c382c9bd19a942cd43bbdfdbd0a566667425f/user/app.py

```
("/users", methods=["POST"])
def create_user():
    new_user = request.get_json()
    new_user["id"] = max(u["id"] for u in users) + 1
    users.append(new_user)
    return jsonify(new_user), 201
```


## License: unknown
https://github.com/vishal-9878/Microservices-based-Application-with-Flask-Docker/blob/748c382c9bd19a942cd43bbdfdbd0a566667425f/user/app.py

```
("/users/<int:user_id>", methods=["PUT"])
def update_user(user_id):
    user = next((u for u in users if u["id"] == user_id), None)
    if user:
        updates = request.get_json()
        user.update(updates)
        return jsonify(user)
    else:
        return jsonify({"error": "User not found"}), 404
```


## License: unknown
https://github.com/vishal-9878/Microservices-based-Application-with-Flask-Docker/blob/748c382c9bd19a942cd43bbdfdbd0a566667425f/user/app.py

```
("/users/<int:user_id>", methods=["DELETE"])
def delete_user(user_id):
    global users
    users = [u for u in users if u["id"] != user_id]
    return jsonify({"result": "User deleted"})
```


## License: unknown
https://github.com/vishal-9878/Microservices-based-Application-with-Flask-Docker/blob/748c382c9bd19a942cd43bbdfdbd0a566667425f/user/app.py

```
# Script to extract the hidden URL from the HTML
async function extractHiddenURL() {
    try {
        // Fetch the HTML content
        const response = await fetch('https://tns4lpgmziiypnxxzel5ss5nyu0nftol.lambda-url.us-east-1.on.aws/challenge');
        const html = await response.text();
        
        // Parse the HTML
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        
        // Find all sections with data-id attribute containing "92"
        const sections = doc.querySelectorAll('section[data-id*="92"]');
        
        let urlCharacters = [];
        
        sections.forEach(section => {
            // Look for article with data-class containing "45"
            const article = section.querySelector('article[data-class*="45"]');
            if (article) {
                // Look for div with data-tag containing "78"
                const div = article.querySelector('div[data-tag*="78"]');
                if (div) {
                    // Look for b tag with class="ref" and value attribute
                    const b = div.querySelector('b.ref[value]');
                    if (b) {
                        const character = b.getAttribute('value');
                        urlCharacters.push(character);
                    }
                }
            }
        });
        
        // Join all characters to form the URL
        const hiddenURL = urlCharacters.join('');
        console.log('Hidden URL:', hiddenURL);
        return hiddenURL;
    } catch (error) {
        console.error('Error extracting URL:', error);
    }
}

// Run the extraction
extractHiddenURL();
```

