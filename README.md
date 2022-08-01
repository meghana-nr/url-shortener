# url-shortener
URL Shortener Assignment

## Requirements :
 - Install node
    ```
    brew install node
    ```
 - Install mongodb and run it as background process
    ```
    brew install mongodb-community@6.0
    mongod --config /opt/homebrew/etc/mongod.conf --fork
    ```
## How to run the app
- Download code from github
    ```
    git clone https://github.com/meghana-nr/url-shortener.git
    ```
- Run npm run command
    ```
    npm run devStart
    ```

## About the assignment
- Languages
   ```
   The solution is written in Embedded Javascript (https://ejs.co/) using npm/node.
    ```
   
- Database
    ```
    The solution uses MongoDB since we don't need any relationships between objects so a NoSQL DB should work.
    The DB is used to store the full url key mapped to the shorturl for it.
    ```
- Short URL generator
    ```
    The solution does not use any encoding/hashing techniques like md5 or sha256 since it many URLs may generate the 
    same key and cause collisions or duplicates. 
    Instead the idea is to use a Unique Key Generator / Random string generator, in this case 'npm shortid' (https://www.npmjs.com/package/shortid)
    generate any number of ids without duplicates, even millions per day.
    Each unique key gets associated with a URL and pushed into the DB.
    ```

- Different use cases
    ```
    User inputs a new URL -> The app generates a short URL for it (which redirects to the full URL link when clicked) and stores the full and short URL in DB
    User inputs a URL existing in DB already -> The app searches for it's short URL (which redirects to the full URL link when clicked) in the DB and returns it
    ```

- Scope for improvement/enhancment
    ```
    The DB has to be cleaned up at some periodic interval so that it does not get exhausted.
    Multiple read only replicas can be maintained so that there is no single point of failure when the primary is down.
    The short url generated can be customised further per user id if need be.
    Caching and load balancers can be implemented to increase efficiency of the system.


    


