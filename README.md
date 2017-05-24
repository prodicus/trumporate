# Trumporate

Post random rants by Donald Trump found based on what he has spoken on and around the internet and his speeches. Uses
[markovipy](https://github.com/prodicus/markovipy) in the background to generate sentences using Markov chains.

## TODO

- [x] Expose on API endpoint on top of which the UI should be built
- [x] Push it to ec2 instance on AWS (sorry Digital Ocean)
- [x] Reproducible infra (ansible)
- [ ] A pretty Logo. Will give back the attribution to you on the website :)
- [ ] Initial UI
- [ ] TDD
- [ ] Shift the frequency generation inside a DB for persistence. The bottleneck as of now

## Running it

```bash
$ git clone git@github.com:/prodicus/trumporate
$ cd trumporate
$ mkvirtualenv trumporate --python=/usr/local/bin/python3
$ pip install -r requirements-dev.txt
$ make run-test-env
```

Open another tab in your terminal

```
$ curl -X GET http://localhost:5000/api/v1/trump/rant/
{
  "rant": "Don't want to be embarrassed like Lindsey Graham and all these companies."
}
```

## License

***If you're using trumporate, please let me know or make a pull
request adding in your name. :)***

GPLv3