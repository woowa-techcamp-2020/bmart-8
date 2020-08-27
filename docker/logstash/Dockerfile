FROM docker.elastic.co/logstash/logstash:7.9.0
ADD pipeline/ /usr/share/logstash/pipeline/
ADD config/ /usr/share/logstash/config/
COPY ./mysql-connector-java-8.0.18.jar /usr/share/logstash/jar/mysql-connector-java-8.0.18.ja