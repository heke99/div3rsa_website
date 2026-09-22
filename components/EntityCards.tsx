import { entities } from "@/lib/company";
export function EntityCards() {
  return <div className="entity-grid">{entities.map((entity,index)=><article className="entity-card" key={entity.id}><span className="entity-index">0{index+1} / {entity.jurisdiction}</span><h3>{entity.name}</h3><p>{entity.description}</p><dl><dt>{entity.registrationLabel}</dt><dd>{entity.registrationNumber}</dd></dl></article>)}</div>;
}
