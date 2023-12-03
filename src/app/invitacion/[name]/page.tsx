interface InvitationPageProps {
  params: {
    name: string;
    person: string;
  };
}
import { redirect } from "next/navigation";
import { People } from "../../../../public/data/invitated-people";
import CarouselT from "@/app/components/carousel/CarouselT";

async function getDataGuest(name: string) {
  const res = await fetch(
    /*  `https://marriage-invitation-alpha.vercel.app/api/guests/${name}`, */
    `http://localhost:3000/api/guests/${name}`,
    {
      cache: "no-cache",
    }
  );
  const { guest } = await res.json();

  return guest[0];
}

const InvitationPage = async ({ params }: InvitationPageProps) => {
  if (!params) return null;
  const guest: People = await getDataGuest(params.name);

  if (!guest) {
    redirect("/404");
  }

  return (
    <div>
      <CarouselT guest={guest}></CarouselT>
    </div>
  );
};

export default InvitationPage;
