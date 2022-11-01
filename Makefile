CUR_DIR = $(CURDIR)
CONTAINER_NAME = app-citations-papillotes

install:
	docker build . -t $(CONTAINER_NAME) -f Dockerfile
	docker run -it --rm -w /app -v $(CUR_DIR):/app $(CONTAINER_NAME) npm install --force

build:
	docker run -it --rm -w /app -v $(CUR_DIR):/app $(CONTAINER_NAME) npm run build

lint-fix:
	docker run -it --rm -w /app -v $(CUR_DIR):/app $(CONTAINER_NAME) npm run lint -- --fix

lint:
	docker run -it --rm -w /app -v $(CUR_DIR):/app $(CONTAINER_NAME) npm run lint

test:
	docker run -it --rm -w /app -p 9876:9876 -v $(CUR_DIR):/app $(CONTAINER_NAME) npm run test

e2e:
	docker run -it --rm -w /app -v $(CUR_DIR):/app $(CONTAINER_NAME) npm run e2e

start:
	docker run -it --rm -w /app -p 4200:4200  -v $(CUR_DIR):/app $(CONTAINER_NAME) npm run start

dev-ssr:
	docker run -it --rm -w /app -p 4200:4200  -v $(CUR_DIR):/app $(CONTAINER_NAME) npm run dev:ssr

serve-ssr:
	docker run -it --rm -w /app -p 4200:4200  -v $(CUR_DIR):/app $(CONTAINER_NAME) npm run serve:ssr

build-ssr:
	docker run -it --rm -w /app -p 4200:4200  -v $(CUR_DIR):/app $(CONTAINER_NAME) npm run build:ssr

clean:
	rm -rf .angular/cache/*
