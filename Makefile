up:
	docker-compose up -d
	yarn dev &
	sudo caddy reverse-proxy --from :80 --to :3000

down:
	docker-compose down

install:
	yarn install

clean:
	docker stop $(docker ps -a -q)
	docker rm $(docker ps -a -q)
	rm -rf node_modules .next
