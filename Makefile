up:
	docker-compose up -d
	yarn dev

down:
	docker-compose down

install:
	yarn install

clean:
	docker stop $(docker ps -a -q)
	docker rm $(docker ps -a -q)
	rm -rf node_modules .next
