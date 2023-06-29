import styled from "styled-components";

interface HomeProps {
  className?: string;
}

function Home({ className }: HomeProps) {
  return (
    <div className={className}>
      <header>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

const StyledHome = styled(Home)`
  text-align: center;
  header {
    background-image: linear-gradient(to right, #ffecd2 0%, #fcb69f 100%);
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
  }
`;
export default StyledHome;
