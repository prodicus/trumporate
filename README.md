# Trumporate

[![Build status](https://api.travis-ci.org/tasdikrahman/trumporate.svg)](https://travis-ci.org/tasdikrahman/trumporate/)

Post random rants by Donald Trump found based on what he has spoken on and around the internet and his speeches. Uses
[markovipy](https://github.com/tasdikrahman/markovipy) in the background to generate sentences using Markov chains.

[![Trumporate Demo](https://user-images.githubusercontent.com/20974909/27253726-7fc5b6da-5397-11e7-93e1-acab8c5b2f5a.jpg)](https://github.com/tasdikrahman/trumporate)


## TODO

- [x] Expose on API endpoint on top of which the UI should be built
- [x] Push it to ec2 instance on AWS (sorry Digital Ocean)
- [x] Reproducible infra (ansible)
- [x] A pretty Logo. Will give back the attribution to you on the website :)
- [x] Initial UI
- [x] ~~Shift the frequency generation inside a DB for persistence. The bottleneck as of now~~ Shifted it to a flat file.
- [x] Mobile friendly UI
- [x] Share rants on Twitter
- [x] Domain registration
- [x] Fix SSL stuff
- [x] Basic Tests
- [ ] Dockerize the app
- [ ] Setup CI/CD pipeline

## Running it

```bash
$ git clone git@github.com:/tasdikrahman/trumporate
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

## Donation

If you have found my little bits of software being of any use to you, do consider helping me pay my internet bills :)

| PayPal | <a href="https://paypal.me/tasdik" target="_blank"><img src="https://www.paypalobjects.com/webstatic/mktg/logo/AM_mc_vs_dc_ae.jpg" alt="Donate via PayPal!" title="Donate via PayPal!" /></a> |
|:-------------------------------------------:|:-------------------------------------------------------------:|
| Gratipay  | <a href="https://gratipay.com/tasdikrahman/" target="_blank"><img src="https://cdn.rawgit.com/gratipay/gratipay-badge/2.3.0/dist/gratipay.png" alt="Support via Gratipay" title="Support via Gratipay" /></a> |
| Patreon | <a href="https://www.patreon.com/tasdikrahman" target="_blank"><img src="http://i.imgur.com/ICWPFOs.png" alt="Support me on Patreon" title="Support me on Patreon" /></a> |
| £ (GBP) | <a href="https://transferwise.com/pay/d804d854-6862-4127-afdd-4687d64cbd28" target="_blank"><img src="http://i.imgur.com/ARJfowA.png" alt="Donate via TransferWise!" title="Donate via TransferWise!" /></a> |
| € Euros | <a href="https://transferwise.com/pay/64c586e3-ec99-4be8-af0b-59241f7b9b79" target="_blank"><img src="http://i.imgur.com/ARJfowA.png" alt="Donate via TransferWise!" title="Donate via TransferWise!" /></a> |
| ₹ (INR)  | <a href="https://www.instamojo.com/@tasdikrahman" target="_blank"><img src="https://www.soldermall.com/images/pic-online-payment.jpg" alt="Donate via instamojo" title="Donate via instamojo" /></a> |
