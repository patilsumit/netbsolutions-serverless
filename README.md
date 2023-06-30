# Kaplan Project Build with TypeORM NodeJS

# POSTMAN COLLECTIONS LINK:-
https://api.postman.com/collections/18796930-4d42a15f-8a88-40df-8006-1fa7ad53a9d0?access_key=PMAT-01GVGQS76MCBC28RWBTZJC4VCW

#How efficient is your code? What are some ways that you could improve performance?
  *we can use Asynchronous Functions mostly so that cpu can handle simultaneously load on server
  *Avoid Sessions and Cookies in APIs, and Send Only Data in the API Response.
  *Optimize Database Queries and maintain proper indexes.
  *Optimize APIs with PM2 Clustering because increase the performance
  *Use Error Scripts with Logging. ...
  *Use HTTP/2 Instead of HTTP. ...
  *Run Tasks in Parallel.

#How can we handle the load?
  *Server-side caching is one of the most common strategies for improving the performance of a web            application.Its primary aim is to increase the speed of data retrieval because stroring as temporary.
  *Using nodejs clustiring to manage horizontally scaling
  *we dont need to user static files in nodejs like css and images and need to complete spike testing

#new endpoint added in integration
  *Existing nodejs project any other country endpoint added so we need to modify as callback because if any one apis is fail 2nd will be giving the result   


Steps to run this project:

1. Run `npm i` command
2. Run `npm run dev` command
