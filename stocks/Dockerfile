FROM openjdk:8-jre-alpine

COPY target/stocks.jar .

#VOLUME /logs
#VOLUME /ui/repo
#VOLUME /mount
EXPOSE 9080

LABEL org.opencontainers.image.source=https://github.com/dhruvinrsoni-zebra/zstock0holics

ENTRYPOINT ["java", "-jar", "stocks.jar"]