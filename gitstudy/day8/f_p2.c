#include <Stdio.h>
#include <String.h>

//주인공 설정
struct _S_HEROINE2 {
	int m_nLp; //라이프 포인트(생명력, 피해를 견디는 힘에 대한 게이지)
	int m_nVp; //폭력(고양이수인 모드에서 기술들을 사용할 때의 게이지)
	int m_nPp; //절제력(인간 모드에서 기술들을 사용할 때의 게이지)
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
	struct _S_HEROINE2 heroine2;
	
	//주인공의 능력치와 정보 설정
	heroine2.m_nLp = 709;
	heroine2.m_nVp = 100;
	heroine2.m_nPp = 50;
	heroine2.m_nTp = 500;
	heroine2.m_nLevel = 5;
	heroine2.m_nExp = 44;
	heroine2.m_nExpNext = 6;
	strcpy(heroine2.m_szName,"손명희");
	strcpy(heroine2.m_szNick,"이중인격자");
	strcpy(heroine2.m_szClass,"와일드 슬래셔");
	
	printf("스테이터스\n");
	printf("당신의 이름 : %s\n",heroine2.m_szName);
	printf("칭호 : %s\n",heroine2.m_szNick);
	printf("직업 : %s\n",heroine2.m_szClass);
	printf("레벨: %d\n",heroine2.m_nLevel);
	printf("경험치: %d          \n",heroine2.m_nExp);
	printf("레벨업까지: %d\n",heroine2.m_nExpNext);
	printf("생명력 : %d\n",heroine2.m_nLp);
	printf("폭력수치 : %d\n",heroine2.m_nVp);
	printf("절제력 : %d\n",heroine2.m_nPp);
	printf("택티컬 포인트 : %d\n\n",heroine2.m_nTp);
	
	return 0;
}