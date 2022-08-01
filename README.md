# url-shortener
URL Shortener Assignment

## Requirements :
 - Install node
    ```
    brew install node
    ```
 - Install mongodb and run it as background process
    ```
    1. brew tap mongodb/brew
    2. brew install mongodb-community@6.0
    3. Run background process using -
        For macOS running Intel processors:
            mongod --config /usr/local/etc/mongod.conf --fork
        (or)
        For macOS running on Apple M1 processors:
            mongod --config /opt/homebrew/etc/mongod.conf --fork
    ```

## How to run the app
- Download code from github
    ```
    git clone https://github.com/meghana-nr/url-shortener.git
    ```
- Run npm run command
    ```
    npm run url_shortener

## Access the app on the browser
 - Access localhost on port 8000 to run the app
    ```
     http://localhost:8000/
    ```

## Example
 - Steps
  ``` 
  After running the npm command on the terminal , go to http://localhost:8080 on the browser
  Type "https://www.amazon.com" on URL box. Note - http:// or https:// is mandatory
  Click on "shorten" button
  ```

## About the approaches used in the assignment solution
- Languages
   ```
   1. The solution is written in Embedded Javascript (https://ejs.co/) using npm/node.
    ```
   
- Database
    ```
    1. The solution uses MongoDB since we don't need any relationships between objects so a NoSQL DB should work.
    2. The DB is used to store the full url key mapped to the shorturl for it.
    ```
- Short URL generator
    ```
    1. The solution does not use any encoding/hashing techniques like md5 or sha256 since it many URLs may generate the 
    same key and cause collisions or duplicates. 
    2. Instead the idea is to use a Unique Key Generator / Random string generator, in this case 'npm shortid' (https://www.npmjs.com/package/shortid)
    generate any number of ids without duplicates, even millions per day.
    3. Each unique key gets associated with a URL and pushed into the DB.
    ```

- Different use cases
    ```
    1. User inputs a new URL -> The app generates a short URL for it (which redirects to the full URL link when clicked) and stores the full and short URL in DB
    2. User inputs a URL existing in DB already -> The app searches for it's short URL (which redirects to the full URL link when clicked) in the DB and returns it
    ```

- Scope for improvement/enhancment
    ```
    1. The DB has to be cleaned up at some periodic interval so that it does not get exhausted.
    2. Multiple read only replicas can be maintained so that there is no single point of failure when the primary is down.
    3. The short url generated can be customised further per user id if need be.
    4. Caching and load balancers can be implemented to increase efficiency of the system.
    5. Unit testing


    


