FROM openjdk:8

COPY target/stock.jar .

#VOLUME /logs
#VOLUME /ui/repo
#VOLUME /mount
EXPOSE 9080

ENTRYPOINT ["java", "-jar", "stock.jar"]