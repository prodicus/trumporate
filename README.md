# Trumporate

Post random rants by Donald Trump found based on what he has spoken on and around the internet and his speeches. Uses
[markovipy](https://github.com/prodicus/markovipy) in the background to generate sentences using Markov chains.

[![Trumporate Demo](https://user-images.githubusercontent.com/20974909/27253726-7fc5b6da-5397-11e7-93e1-acab8c5b2f5a.jpg)](https://github.com/prodicus/trumporate)


## TODO

- [x] Expose on API endpoint on top of which the UI should be built
- [x] Push it to ec2 instance on AWS (sorry Digital Ocean)
- [x] Reproducible infra (ansible)
- [x] A pretty Logo. Will give back the attribution to you on the website :)
- [x] Initial UI
- [x] ~~Shift the frequency generation inside a DB for persistence. The bottleneck as of now~~ Shifted it to a flat file.
- [x] Mobile friendly UI
- [x] Share rants on Twitter
- [ ] Domain registration
- [ ] Fix SSL stuff
- [ ] TDD

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
