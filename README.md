# express-exercise
REST API exercise using Express

## setup

```bash
$ git clone https://github.com/egermano/express-exercise.git
$ yarn install
$ yarn start
```

## Methods

(running on localhost:8080)

**`GET` /todos**

expected response:

```JSON
[
    {
        "title": "create a project",
        "done": false
    },
    {
        "title": "writes classes",
        "done": false
    },
    {
        "title": "create start script",
        "done": false
    }
]
```

**`POST` /todos**

request body:

```JSON
{
	"title": "make some tests",
	"done": false
}
```

expected response:

```JSON
{
	"title": "make some tests",
	"done": false
}
```

**`PUT` /todos/3**

request body:

```JSON
{
	"title": "make some tests",
	"done": true
}
```

or partial

request body:

```JSON
{
	"done": true
}
```

expected response:

```JSON
{
	"title": "make some tests",
	"done": true
}
```

**`DELETE` /todos/0**

expected response:

```JSON
[
    {
        "title": "writes classes",
        "done": false
    },
    {
        "title": "create start script",
        "done": false
    }
]
```