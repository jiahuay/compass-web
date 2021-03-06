config = {
	"switches": [
		{
			"switch": {
				"ip": "172.29.8.40",
				"credential": {
					"version": "v2c",
					"community": "public"
				}
			}
		},
		{
			"switch": {
				"ip": "172.29.8.41",
				"credential": {
					"version": "v2c",
					"community": "public"
				}
			}
		}
	],
	"security": {
		"server_credentials": {
			"username": "root",
			"password": "root"
		},
		"service_credentials": {
			"username": "service",
			"password": "admin"
		},
		"console_credentials": {
			"username": "console",
			"password": "admin"
		}
	},
	"networking": {
		"interfaces": {
			"management": {
				"ip_start": "10.10.10.100",
				"ip_end": "10.10.10.255",
				"netmask": "255.255.255.0",
				"gateway": "10.10.10.1",
				"nic": "eth0",
				"promisc": 0
			},
			"tenant": {
				"ip_start": "192.168.100.100",
				"ip_end": "192.168.100.200",
				"netmask": "255.255.255.0",
				"gateway": "192.168.100.1",
				"nic": "eth1",
				"promisc": 0
			},
			"public": {
				"ip_start": "172.29.3.100",
				"ip_end": "172.29.3.200",
				"netmask": "255.255.255.0",
				"gateway": "172.29.3.1",
				"nic": "eth2",
				"promisc": 0
			},
			"storage": {
				"ip_start": "172.16.128.10",
				"ip_end": "172.16.128.200",
				"netmask": "255.255.255.0",
				"gateway": "172.16.128.1",
				"nic": "eth3",
				"promisc": 0
			}
		},
		"global": {
			"nameservers": "4.4.4.4,8.8.8.8",
			"search_path": "ods.com,ods2.com",
			"gateway": "172.19.100.1",
			"proxy": "",
			"ntp_server": ""
		}
	}	

};