import React from "react";
import { BsGearWide } from "react-icons/bs";
import { GrDeploy } from "react-icons/gr";
import { SiAzuredataexplorer } from "react-icons/si";
import { Title } from "./small/title";
import { MdOutlineDeviceHub } from "react-icons/md";

export const Process = () => {
  return (
    <div className="mx-4 py-20 md:px-20 md:py-40" id="flow">
      <Title title="Process" isCenter="center" />
      <h1 className="text-4xl font-extrabold text-center">
        Mon proccesus de traivail
      </h1>
      <div className="flex flex-col lg:flex-row justify-center gap-3 mt-20">
        <div className="flex flex-col border border-base rounded-xl p-3 justify-center items-center">
          <div className="border rounded-full border-light border-dashed p-2 w-fit">
            <div className=" bg-base w-fit p-3 rounded-full ">
              <BsGearWide size="2.5rem" color="white" />
            </div>
          </div>
          <p className="text-3xl font-semibold">Évaluation des besoins</p>
          <div className="text-2xl text-justify">
            Le premier pas est d\'évaluer les besoins du client. Cela implique
            de comprendre les objectifs du client, ses exigences et ses
            contraintes. Une fois que les besoins du client sont bien compris,
            l\'agence peut commencer à développer une solution personnalisée.
          </div>
        </div>
        <div className="flex flex-col border border-base rounded-xl p-3 justify-center items-center">
          <div className="border rounded-full border-light border-dashed p-2 w-fit">
            <div className=" bg-base w-fit p-3 rounded-full ">
              <MdOutlineDeviceHub
                size="2.5rem"
                color="white"
                className="text-white"
              />
            </div>
          </div>
          <p className="text-3xl font-semibold">Conception et développement</p>
          <div className="text-2xl text-justify">
            La deuxième étape consiste à concevoir et à développer la solution.
            Cela implique de créer une architecture, de choisir les technologies
            appropriées et de développer le code. L\'agence doit également
            tester la solution pour s\'assurer qu\'elle fonctionne correctement.
          </div>
        </div>
        <div className="flex flex-col border border-base rounded-xl p-3 justify-center items-center">
          <div className="border rounded-full border-light border-dashed p-2 w-fit">
            <div className=" bg-base w-fit p-3 rounded-full ">
              <SiAzuredataexplorer
                size="2.5rem"
                color="white"
                className="text-white"
              />
            </div>
          </div>
          <p className="text-3xl font-semibold">Déploiement et support</p>
          <div className="text-2xl text-justify">
            Une fois que la solution est développée, elle doit être déployée sur
            un serveur. L\'agence doit également fournir un support au client
            pour l\'aider à utiliser la solution et à résoudre tout problème
            potentiel.
          </div>
        </div>
      </div>
    </div>
  );
};
