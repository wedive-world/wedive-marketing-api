FROM --platform=linux/amd64 node:15

WORKDIR /usr/src/wedive-marketing-api

ARG NODE_ENV

ENV NODE_ENV=${NODE_ENV}

# 앱 의존성 설치
# 가능한 경우(npm@5+) package.json과 package-lock.json을 모두 복사하기 위해
# 와일드카드를 사용
COPY package*.json ./

RUN npm install
# 프로덕션을 위한 코드를 빌드하는 경우
# RUN npm ci --only=production

RUN npm install -g pm2

# 앱 소스 추가 a
COPY . .

EXPOSE 3000

CMD ["npm", "run", "start"]
# CMD ["npm", "run", "start-production"] TODO uncomment when production serice started
