
# ETAPA 1 - Compilação
FROM maven:3.9-eclipse-temurin-21 AS build

WORKDIR /app

# Copia as dependências do projeto
COPY pom.xml .

# Baixa as dependências e aproveita o cache
RUN mvn dependency:go-offline -B

# Copia o código-fonte
COPY src ./src

# Compila a aplicação
RUN mvn clean package -DskipTests -B

# ETAPA 2 - Execução
FROM eclipse-temurin:21-jre

WORKDIR /app

# Copia o JAR gerado na primeira etapa
COPY --from=build /app/target/*.jar app.jar

# Documenta a porta da aplicação
EXPOSE 8086

# Executa o Spring Boot
ENTRYPOINT ["java", "-jar", "app.jar"]
