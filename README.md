# MongoDB $in Operator Inefficiency with Single Value

This example demonstrates an inefficient use of MongoDB's `$in` operator when used with a single value. The `$in` operator is designed for queries involving multiple values. When applied to a single value, it's unnecessary and can lead to slight performance degradation, especially with large datasets.

## Problem

The provided JavaScript code demonstrates an attempt to find documents using the `$in` operator with just one value in the array. This is less efficient than using the equality operator (`=`).

## Solution

The solution replaces the `$in` operator with a direct equality comparison. This optimization improves query efficiency.

## How to run

1. Ensure you have Node.js and npm installed.
2. Install the MongoDB driver: `npm install mongodb`
3. Replace `<connection_string>` with your MongoDB connection string.
4. Replace `databaseName` and `collectionName` with the appropriate database and collection names.
5. Run the JavaScript files.