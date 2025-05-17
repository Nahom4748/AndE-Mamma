import Link from "next/link";
import CartHeader from "./CartHeader";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import { useHeaderContex } from "@/providers/HeaderContex";
import SocialHeader from "./SocialHeader";

const HeaderRight = () => {
  const { style } = useHeaderContex();
  return (
    <div className="headerarea__component">
      <div className="headerarea__right">
        {style === 4 ? (
          <SocialHeader />
        ) : (
          <>
            <div className="headerarea__cart__wraper">
              <div className="headerarea__cart__icon">
                
              </div>

            </div>
        
          </>
        )}
      </div>
    </div>
  );
};

export default HeaderRight;
