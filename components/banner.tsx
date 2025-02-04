import { Banner as BannerType } from "@/types";

interface BannerProps {
  data: BannerType;
}

const Banner: React.FC<BannerProps> = ({ data }) => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
      <div
        className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover"
        style={{ backgroundImage: `url(${data?.imageUrl ? data.imageUrl : "https://img.freepik.com/premium-photo/female-buyer-pays-with-bank-card-tea-shop-happy-seller-smiling-excellent-service_1048944-3428350.jpg?uid=R72249137&ga=GA1.1.5617288.1734018438&semt=ais_hybrid_sidr"})` }}
      >
        <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
         
          <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs">
            {data?.label}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner