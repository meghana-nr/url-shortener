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
The solution is written in [EJS](https://ejs.co/) with mongo DB as the store for shortened URLs. A random unique key generator is used to generate the shortened urls.
