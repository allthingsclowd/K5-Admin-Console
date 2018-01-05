# Demonstration K5 Administrative Portal
## Angular 5.0 with OpenStack APIs

K5 Admin Console is a basic reactive front-end Angular portal that I put together for three reasons:
  - learn Angular (2-5) and front-end programming
  - demonstration of how to consume Fujitsu Cloud Service K5 OpenStack API calls through Angular
  - example CI/CD Pipeline application demonstrating a Git workflow

The project has been updated to Angular 5 on 04 January 2018 following the procedure outlined by the Angular team here https://angular-update-guide.firebaseapp.com/

This will only ever be a playground or demonstration app - please fork and productionise should you wish to actually use it in production - it's alpha code :)

## Porting to other flavours of OpenStack
There's a few APIs that are enhancements to OpenStack that only Fujitsu Cloud Service K5 utilises, these will obviously not work with generic OpenStack Kilo deployments. However, these aside, if you wish to try this against something other than Fujitsu Cloud Service K5 then look at the __identity.service.ts__ service module as this is where I've hardcode Fujitsu's identity endpoints. The identity federation I'm sure will be different for you. 

## Cross Origin Resource Sharing (CORS) Proxy
The OpenStack Kilo API endpoints that were used for development of this demo portal form the basis of Fujitsu's Cloud Service K5 IaaS offering. These endpoints do not support CORS headers (see https://en.wikipedia.org/wiki/Cross-origin_resource_sharing) so it is necessary to run an additional simple backend proxy service to manage CORS headers in the API calls. I have documented this process previously here https://allthingscloud.eu/2017/03/24/cross-origin-resource-sharing-cors-on-fujitsus-k5-platform/
_Note:_ Please build the cors_proxy docker image that's available here, https://github.com/allthingsclowd/cors_proxy, before continuing as this docker image is required by the docker-compose.yml file.

## Angular versus React
The Angular-Cli was used to create the original project and build all the components. I cannot recommend the Angular framework enough, the productivity/code quality it introduces is phenomenal. I see lots of debate online about Angular versus React but this is comparing a framework to a library - makes no sense. It is possible to implement the Flux data flow architecture with Angular to get the best of both worlds e.g. see https://www.uruit.com/blog/2017/05/04/using-redux-angular/

# Installation (verified using Ubuntu 16.04)
For the past few years I'm telling my customers, friends and even family that containers are the future and we should all be moving away from VMs whenever possible. So it's time that I start drinking my own champagne and to that end I have supplied a couple of Dockerfiles (https://www.docker.com/) that will create containers ready for development and production. This guarantees that we're ALL working off the same binaries...in theory if I remember to lock down all my versions in the image files :)

## Development Setup
 1. Download the repository to your local development environment using git (https://www.atlassian.com/git/tutorials)

```bash
mkdir AngularDemo && cd AngularDemo
git clone https://github.com/allthingsclowd/K5-Admin-Console.git .
```
 2. Build the new docker image using the Dockerfile whilst in the AngularDemo directory

```bash
docker build -t k5angulardemo .
```
__Note:__ The following warnings can be ignored during the docker image build
```bash
Step 5/7 : RUN ["npm", "install"]
 ---> Running in 89a68a68a235
npm WARN codelyzer@3.0.1 requires a peer of @angular/compiler@^2.3.1 || >=4.0.0-
beta <5.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN codelyzer@3.0.1 requires a peer of @angular/core@^2.3.1 || >=4.0.0-beta
 <5.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.1.3 (node_modules/fse
vents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@
1.1.3: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"}
)

```
 
 3. Now we could run or start the newly built docker image as follows:

```bash
docker run -it --rm -p 4200:4200 -v $PWD/src:/app/src k5angulardemo
```

  4. However, you'll quickly notice that the API calls fail due to the earlier mentioned CORS issue. It's time to kill the previously started docker image and launch the docker-compose.yml file that launches and configures everything that we need to run this development setup locally as follows:

  ```bash
docker-compose up
  ```
  
  5. Using HTTPS navigate to port 4200 on the docker host server to see the application in action - __https://__dockerhost:4200

 __Note:__ As we mounted the src directory of the downloaded repository onto the docker image at runtime we can see the debugger (test webserver) pickup the changes and recompile the application in realtime.

![image](https://user-images.githubusercontent.com/9472095/34585479-c7772b78-f197-11e7-8dce-aa45069e568a.png)


