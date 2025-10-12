import type { Metadata } from "next";
import SocialsCodeBlock from "./_components/SocialsCodeBlock";
import SocialLinkItem from "./_components/SocialLinkItem";
import CodeTextItem from "./_components/CodeTextItem";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "프론트엔드 개발 관련 기술 블로그입니다. 개발 경험, 기술 트렌드, 문제 해결 과정을 공유합니다.",
  keywords: [
    "개발 블로그",
    "프론트엔드 블로그",
    "기술 블로그",
    "Tech Blog",
    "개발 경험",
  ],
  openGraph: {
    title: "Blog | 양진성",
    description: "프론트엔드 개발 관련 기술 블로그",
    type: "website",
    locale: "ko_KR",
  },
};

export default function BlogPage() {
  return (
    <div className="p-8 h-full overflow-auto">
      <div className="mx-auto">
        {/* 헤더 섹션 */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 text-foreground">Blog</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            내가 가지고 있는 지식들을 내 언어로 잘 정리해두는 것은 꽤나
            어렵지만, 의미있는 작업입니다.
          </p>
        </div>

        {/* 라인 번호 */}
        <div className="flex">
          <div className="text-muted-foreground text-sm font-mono select-none">
            <div className="space-y-2">
              {Array.from({ length: 11 }).map((_, index) => (
                <div key={index}>{index + 1}</div>
              ))}
            </div>
          </div>
          <div className="flex flex-col">
            {/* 코드 블록 스타일 링크 섹션 */}
            <SocialsCodeBlock name="#blog">
              <SocialLinkItem
                keyName="velog"
                label="https://velog.io/@dkzm4646/posts"
                href="https://velog.io/@dkzm4646/posts"
              />
              <CodeTextItem
                keyName="description"
                value="종종 정리하고 있는 벨로그 입니다. :)"
              />
              <SocialLinkItem
                keyName="naver_blog"
                label="https://blog.naver.com/anfakt0606"
                href="https://blog.naver.com/anfakt0606"
              />
              <CodeTextItem
                keyName="description"
                value="예전에 작성했던 네이버 블로그입니다. 더 이상 작성되지 않고 벨로그에서 포스트를 작성하고 있습니다."
              />
            </SocialsCodeBlock>

            {/* 깃허브 섹션 */}
            <SocialsCodeBlock name=".github">
              <SocialLinkItem
                keyName="github"
                label="https://github.com/omokgosu"
                href="https://github.com/omokgosu"
              />
              <CodeTextItem
                keyName="description"
                value="제가 작성한 코드를 볼 수 있는 깃허브입니다. 의미있는 프로젝트를 하기 위해 노력하고 있어요."
              />
            </SocialsCodeBlock>
          </div>
        </div>
      </div>
    </div>
  );
}
