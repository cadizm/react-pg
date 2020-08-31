all:
	docker build --tag cadizm/react-pg .

run:
	docker run --rm -p 5000:5000 cadizm/react-pg

push:
	docker push cadizm/react-pg

.PHONY: all run push
