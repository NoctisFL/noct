#include <Stdio.h>
#include <String.h>

//주인공 설정
struct _S_HERO1 {
	int m_nLp; //라이프 포인트(생명력, 피해를 견디는 힘에 대한 게이지)
	int m_nMp; //마나 포인트(일반적인 기술들을 사용할 때의 게이지)
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
	struct _S_HERO1 hero1;
	
	//주인공의 능력치와 정보 설정
	hero1.m_nLp = 301;
	hero1.m_nMp = 104;
	hero1.m_nTp = 300;
	hero1.m_nLevel = 3;
	hero1.m_nExp = 14;
	hero1.m_nExpNext = 46;
	strcpy(hero1.m_szName,"녹티스 루시스 첼룸");
	strcpy(hero1.m_szNick,"루시스 왕국의 왕자");
	strcpy(hero1.m_szClass,"웨폰 마스터");
	
	printf("스테이터스\n");
	printf("당신의 이름 : %s\n",hero1.m_szName);
	printf("칭호 : %s\n",hero1.m_szNick);
	printf("직업 : %s\n",hero1.m_szClass);
	printf("레벨: %d\n",hero1.m_nLevel);
	printf("경험치: %d          \n",hero1.m_nExp);
	printf("레벨업까지: %d\n",hero1.m_nExpNext);
	printf("생명력 : %d\n",hero1.m_nLp);
	printf("마나 : %d\n",hero1.m_nMp);
	printf("택티컬 포인트 : %d\n\n",hero1.m_nTp);
	
	return 0;
}