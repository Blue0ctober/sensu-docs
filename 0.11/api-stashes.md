---
version: "0.11"
category: "API"
title: "Stashes"
---

# Stashes API Endpoint

The stashes endpoints allows you to create, list and delete stashes.

## `/stashes`

example url - `http://localhost:4567/stashes`

* `GET`: returns a list of stash paths

  - Parameters

    - `limit`

      - optional

      - value: integer

      - description: "The number of stashes to return."

    - `offset`

      - optional

      - value: integer

      - depends: `limit`

      - description: "The number of stashes to offset before returning items."

  - success: 200:

    ~~~ json
    [
      "foo",
      "bar"
    ]
    ~~~

  - error: 500

* `POST`: Create a stash (JSON document)

  - payload:

    ~~~ json
    {
      "path": "random_stash",
      "content": {
        "reason": "things are stashy"
      }
    }
    ~~~

  - success: 201

  - error: 500

## `/stashes/:path`

example url - `http://localhost:4567/stashes/foo`

* `POST`: create a stash (JSON document)

  - payload:

    ~~~ json
    {
      "bar": 42
    }
    ~~~

  - success: 201

  - malformed: 400

  - error: 500

* `GET`: get a stash (JSON document)

  - success: 200:

    ~~~ json
    {
      "bar": 42
    }
    ~~~

  - missing: 404

  - error: 500

* `DELETE`: delete a stash (JSON document)

  - success: 204

  - missing: 404

  - error: 500
