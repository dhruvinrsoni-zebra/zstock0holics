FROM openjdk:8

COPY target/portfolio.jar .

#VOLUME /logs
#VOLUME /ui/repo
#VOLUME /mount
EXPOSE 9081

LABEL org.opencontainers.image.source=https://github.com/dhruvinrsoni-zebra/zstock0holics

ENTRYPOINT ["java", "-jar", "portfolio.jar"]