#Base image taken from:https://github.com/cypress-io/cypress-docker-images
FROM cypress/browsers:node16.14.2-slim-chrome100-ff99-edge
#Create the folder where our project will be stored
RUN mkdir /swaglabsautomation
#We make it our workdirectory
WORKDIR /swaglabsautomation
#Let's copy the essential files that we MUST use to run our scripts.
COPY ./package.json .
COPY ./package-lock.json .
COPY ./cypress.config.js .
COPY ./Dockerfile .
COPY ./cypress ./cypress
#Install the cypress dependencies in the work directory
RUN npm install
#Executable commands the container will use[Exec Form]
ENTRYPOINT ["npm","run","cy:run-chrome"]
#With CMD in this case, we can specify more parameters to the last entrypoint.
CMD [""]    