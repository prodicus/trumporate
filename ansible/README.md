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
$ cat site.yml 
---
- hosts: trumporate
  vars:
    username: ubuntu
    site_domain: trumporate.com
    letsencrypt_email: example@gmail.com
  roles:
    - role: install_packages
    - role: provision
    - role: systemd
    - role: nginx
    - role: ssl
    # - role: deploy  # enable this after you have to update the server code
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