import { styled } from "styled-components";
import profile from "../../Images/profileImg.jpg";

interface ChloePictureProps {
  className?: string;
}

const ChloePicture = ({ className }: ChloePictureProps) => {
  return (
    <div className={className}>
      <div>
        <img src={profile} alt="chloe" width="200" />
      </div>
    </div>
  );
};

const StyledChloePicture = styled(ChloePicture)`
  padding: 0;
  img {
    height: 200px;
    object-fit: cover;
    border-radius: 100%;
  }
`;

export default StyledChloePicture;
