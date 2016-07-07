#include <Stdio.h>
#include <String.h>

//주인공 설정
struct _S_HEROINE1 {
	int m_nLp; //라이프 포인트(생명력, 피해를 견디는 힘에 대한 게이지)
	int m_nCp; //치유 포인트(회복적인 기술들을 사용할 때의 게이지)
	int m_nHp; //하트 포인트(공격적인 기술들을 사용할 때의 게이지)
	int m_nTp; //택티컬 포인트(특수기술을 사용할 때의 게이지)
	int m_nLevel; //레벨(캐릭터의 강함을 나타내는 척도)
	int m_nExp; //현재 경험치(캐릭터의 성장치)
	int m_nExpNext; //다음 레벨까지의 경험치(캐릭터의 성장치)
	char m_szName[128]; //캐릭터의 이름
	char m_szNick[128]; //캐릭터의 칭호
	char m_szClass[128]; //캐릭터의 직업
};

int main()
{	
	struct _S_HEROINE1 heroine1;
	
	//주인공의 능력치와 정보 설정
	heroine1.m_nLp = 204;
	heroine1.m_nCp = 301;
	heroine1.m_nHp = 50;
	heroine1.m_nTp = 300;
	heroine1.m_nLevel = 1;
	heroine1.m_nExp = 44;
	heroine1.m_nExpNext = 6;
	strcpy(heroine1.m_szName,"퓨라 키츠");
	strcpy(heroine1.m_szNick,"교감하는 소녀");
	strcpy(heroine1.m_szClass,"젠틀 메딕");
	
	//출력하기
	printf("스테이터스\n");
	printf("당신의 이름 : %s\n",heroine1.m_szName);
	printf("칭호 : %s\n",heroine1.m_szNick);
	printf("직업 : %s\n",heroine1.m_szClass);
	printf("레벨: %d\n",heroine1.m_nLevel);
	printf("경험치: %d          \n",heroine1.m_nExp);
	printf("레벨업까지: %d\n",heroine1.m_nExpNext);
	printf("생명력 : %d\n",heroine1.m_nLp);
	printf("치유 포인트 : %d\n",heroine1.m_nCp);
	printf("하트 포인트 : %d스택\n",heroine1.m_nHp);
	printf("택티컬 포인트 : %d\n\n",heroine1.m_nTp);
	
	return 0;
}