import { CLIENTS } from "@/constants/clients";
import ClientLogo from "../cards/ClientLogo";

export default function Clients() {
    return (
        <section className="py-28">
            <div className="mx-auto max-w-7xl px-6">

                <div className="text-center">
                    <h2 className="text-5xl font-bold">
                        <span className="text-[#000]">Our Proven{" "}</span>
                        <span className="text-[#1E6FF2]">
                            Partnerships
                        </span>
                    </h2>

                    <p className="mt-5 text-xl">
                        <span className="text-[#000]">Successful Collaborations With the{" "}</span>
                        <span className="text-[#1E6FF2]">
                            Industry's Best
                        </span>
                    </p>
                </div>

                <div className="mt-20 grid grid-cols-2 gap-12 md:grid-cols-3 lg:grid-cols-6">
                    {CLIENTS.map((client) => (
                        <ClientLogo
                            key={client.id}
                            logo={client.logo}
                            name={client.name}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}