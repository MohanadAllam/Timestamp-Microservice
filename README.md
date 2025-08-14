# Timestamp Microservice

A simple Node.js and Express API that returns Unix and UTC timestamps for a given date or the current time.

## Features

- Returns the current timestamp if no date is provided.
- Accepts a valid date string or Unix timestamp as a parameter.
- Returns both Unix time (milliseconds since Jan 1, 1970) and UTC time format.

## Example Usage

**GET** `/api/timestamp/2015-12-25`  
**Response:**

```json
{
  "unix": 1451001600000,
  "utc": "Fri, 25 Dec 2015 00:00:00 GMT"
}
```
