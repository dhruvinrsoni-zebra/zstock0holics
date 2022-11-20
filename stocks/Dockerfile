FROM openjdk:8

COPY target/stocks.jar .

#VOLUME /logs
#VOLUME /ui/repo
#VOLUME /mount
EXPOSE 9080

ENTRYPOINT ["java", "-jar", "stocks.jar"]