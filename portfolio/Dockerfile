FROM openjdk:8

COPY target/portfolio.jar .

#VOLUME /logs
#VOLUME /ui/repo
#VOLUME /mount
EXPOSE 9081

ENTRYPOINT ["java", "-jar", "portfolio.jar"]