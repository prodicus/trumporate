## infra

Ansible playbooks for setting up the infra for trumporate on an ec2 instance (or the cloud of your choice)

## Running it

Before running the playbook

```bash
$ cd trumporate/ansible
$ cp inventory.example inventory
$ cat inventory
[trumporate:children]
backend

[backend]
web_server ansible_ssh_host=ip_address ansible_ssh_user=youruser ansible_ssh_private_key_file=/path/to/pemfile.pem
$
$ # edit inventory to replace "ip_address", "youruser", "/path/to/pemfile.pem" with your values
$
$ cp roles/nginx/files/trumporate.nginx-conf.example roles/nginx/files/trumporate.nginx-conf
$ cat trumporate.nginx-conf
server {
    listen 80;
    server_name public_ip_address;

    location / {
        include proxy_params;
	proxy_redirect off;
        proxy_pass http://127.0.0.1:5000;
    }
}
$
$ # replace "public_ip_address" with your server's public IP/domain name
```

## Actually running it

```bash
$ cd trumporate/ansible
$ ansible-playbook site.yml -vvv
```

The API endpoint can be then tested 

```bash
$ curl -X GET http://domain_name/api/v1/trump/rant/
{
  "rant": "And then you have of course the 24 days and the 24 days and the 24 days and the 24 days we think there s a big industry."
}
```