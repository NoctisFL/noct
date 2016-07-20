#include <Stdio.h>
#include <String.h>

//주인공 설정
struct _S_HERO2 {
	int m_nLp; //라이프 포인트(생명력, 피해를 견디는 힘에 대한 게이지)
	int m_nFp; //분노수치(기술 사용에 필요한 게이지, 전투중에 빠른 속도로 자동회복되며, 비전투시 급격히 하락함.)
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
	struct _S_HERO2 hero2;
	
	//주인공의 능력치와 정보 설정
	hero2.m_nLp = 1201;
	hero2.m_nFp = 100;
	hero2.m_nTp = 300;
	hero2.m_nLevel = 13;
	hero2.m_nExp = 1531;
	hero2.m_nExpNext = 7;
	strcpy(hero2.m_szName,"에인션트 레시람");
	strcpy(hero2.m_szNick,"고대룡 수인");
	strcpy(hero2.m_szClass,"파이터 드래곤");
	
	//출력하기
	printf("스테이터스\n");
	printf("당신의 이름 : %s\n",hero2.m_szName);
	printf("칭호 : %s\n",hero2.m_szNick);
	printf("직업 : %s\n",hero2.m_szClass);
	printf("레벨: %d\n",hero2.m_nLevel);
	printf("경험치: %d          \n",hero2.m_nExp);
	printf("레벨업까지: %d\n",hero2.m_nExpNext);
	printf("생명력 : %d\n",hero2.m_nLp);
	printf("분노수치 : %d\n",hero2.m_nFp);
	printf("택티컬 포인트 : %d\n\n",hero2.m_nTp);
	
	return 0;
}