## 🚀 GitHub Actions 자동 배포

### 📌 Overview

- GitHub Actions 자동 배포 파이프라인 구축
- 서버별 환경 변수 분리

---

## 🔧 GitHub Actions 설정

### ✅ 1. Secrets 설정

| Key | Description |
|-----|---------------|
| EC2_USER | EC2 접속 유저 |
| EC2_KEY | PEM Key 내용 전체 |
| EC2_HOST | EC2 IP |
| EC2_DATABASE_HOST | 데이터 베이스 ip | 
|AWS_ACCESS_KEY_ID|  IAM 액세스 키 |
|AWS_REGION|  aws 지역명 |
|AWS_S3_BUCKET|  aws s3 버킷 이름 |
|AWS_SECRET_ACCESS_KEY| IAM 시크릿 키 |
|GMAIL_PASSWORD| Gmail 2차 비밀번호 |
|GMAIL_USER| Gmail 보내는 사람 이메일 |
|JWT_SECRET| openssl rand -base64 32의 결과 값 |
|KAKAO_CLIENT_ID| 카카오 rest api 키 |
|KAKAO_CLIENT_SECRET| 카카오 secret 키 |
|NAVER_CLIENT_ID| 네이버 Client ID |
|NAVER_CLIENT_SECRET| 네이버 Client Secret |
|SMS_ACCESS_KEY| coolsms access 키 |
|SMS_SECRET_KEY| coolsms secret 키 |



---

### ⚙️ 2. Workflow 파일 및 Dockerfile 파일 생성하기

| 파일 | 설명 | 링크 |
|------|--------|--------|
|`ec2_aws_deploy.yml`| GitHub Actions 배포 설정| 🔗 [보기](https://github.com/alzkdpf000/actions-app/blob/master/.github/workflows/ec2_aws_deploy.yml)|
|`Dockerfile`| Docker 빌드 설정| 📦 [보기](https://github.com/alzkdpf000/actions-app/blob/master/Dockerfile)|



##  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg" alt="docker" width="36" height="36"/> 도커 설치하기

### 1. 설치
```bash
# 도커 설치하기
sudo apt install docker.io -y

# 등록
sudo systemctl enable docker
# 시작
sudo systemctl start docker
# 체크
sudo systemctl status docker
# 계정 등록
sudo usermod -aG docker ubuntu
# 도커 버전 체크
docker --version

# 실행중인 프로세스 목록 
docker ps  

# 도커이미지 출력
docker images

```
### 2. 결과 이미지
> docker ps 결과
>![도커 ps 결과](https://velog.velcdn.com/images/alzkdpf000/post/2894e962-2e3b-4e5b-8340-8efe8e355ea8/image.png)

> docker images 결과
>![도커 이미지 출력](https://velog.velcdn.com/images/alzkdpf000/post/a00bb0c5-fcda-4177-861d-6e4b16f65c73/image.png)

### 3. 도커 명령어 모음
| 명령어 | 설명 |
|--------|--------|
| `docker stop [컨테이너명]` | 실행 중인 `[컨테이너명]` 컨테이너 중지 |
| `docker rm [컨테이너명]` | 중지된 `[컨테이너명]` 컨테이너 삭제 |
| `docker images -aq` | 컬럼명 없이 모든 IMAGE ID 출력 |
| `docker rmi $(docker images -aq)` | 모든 Docker 이미지 삭제 |
| `docker images -a` | 로컬에 저장된 Docker 이미지 목록 확인 |
| `docker ps -a` | 실행/중지 포함 모든 컨테이너 목록 확인 |
| `docker logs [컨테이너명]` | `[컨테이너명]` 로그 출력 (`--tail`, `-f` 옵션 사용 가능) |
| `docker system prune -a` | 사용하지 않는 컨테이너/이미지/네트워크 일괄 삭제 (**주의**) |
| `ls` | 현재 디렉토리 파일 목록 확인 |
| `sudo rm -rf [폴더명]` | 로컬 디렉토리 `[폴더명]` 강제 삭제 |


## 🧩 Troubleshooting

### 1.
| Issue                  | Cause               |
| ---------------------- | ------------------- |
| app이라는 이미지를 찾을 수 없다 | 잘못 주입           |

![](https://velog.velcdn.com/images/alzkdpf000/post/212fdd08-6bb2-439e-bc80-5f5a3b0285a3/image.png)

### 1.1 해결
앞서 EC2_HOST를 데이터베이스에다가 추가해버리는 상황이 발생해서 오류가 난 것으로 판단된다. 그래서 EC2_DATABASE_HOST를 추가해서 해주니 오류가 해결되었다.

<br>

### 2.
| Issue                  | Cause               | 
| ---------------------- | ------------------- | 
| lxto라는 이미지를 찾을 수 없다    | 키 값의 공백으로 인해 다른 명령어로 인식 |

![](https://velog.velcdn.com/images/alzkdpf000/post/35da0019-99b7-4d25-884d-b5911c60207b/image.png)

### 2.2 해결
secerts에 넣은 값이 공백을 가지는 키가 있어서 (ex. 1234 2132) 오류가 발생했다. 그런 경우 
<code>AWS_REGION=${{ secrets.AWS_REGION }}</code> --> <br>

<code>AWS_REGION="${{ secrets.AWS_REGION }}"</code>로 바꿔주면 해결된다
