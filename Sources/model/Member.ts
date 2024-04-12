import { useRepositoryViewModel } from "../view-models/RepositoryViewModel";
import { Repository, mapApiObjectToRepository } from "./Repository";

export class Member{
    id: string;
    name: string;
    photoUrl: string;
    repositories: Repository[];

    constructor(
        id: string, 
        name: string, 
        photoUrl : string,
        repositories: Repository[]
      ) {
        this.id = id;
        this.name = name;
        this.photoUrl = photoUrl;
        this.repositories = repositories;
    }
}

export function mapApiObjectToMember(apiObject: any): Member {
  console.log(apiObject);
  return new Member(
    apiObject.id.toString(),
    apiObject.name,
    apiObject.photoUrl,
    apiObject.repositories
  );
}