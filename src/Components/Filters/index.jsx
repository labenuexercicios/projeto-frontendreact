/* eslint-disable react/prop-types */

import {
  FiltroLabelMin,
  FiltroLabelMax,
  FiltroContainer,
  Container,
} from "./style.js";
import { ArrowUp10, ArrowDown10,BadgeDollarSign } from "lucide-react";
export default function Filter(props) {
  const { minFilter, setMinFilter, maxFilter, setMaxFilter } = props;

  return (
    <Container>
      <div>
      <BadgeDollarSign color="var(--ui-success)" size={45} strokeWidth={1.5} />
        
      </div>

      <FiltroContainer>
        <FiltroLabelMin>
          <label htmlFor="textMin">
            <ArrowDown10 color="var(--ui-placeholder)" size={40} strokeWidth={2.0} />
            Min Value:
          </label>

          <input
            value={minFilter}
            onChange={
              minFilter >= 0
                ? (e) => setMinFilter(e.target.value)
                : setMinFilter(0)
            }
            type="number"
            id="textMin"
            name="textMin"
          />
        </FiltroLabelMin>

        <FiltroLabelMax>
          <label htmlFor="textMax">
            <ArrowUp10 color="var(--ui-placeholder)" size={40} strokeWidth={2.0} />
            Max Value:
            </label>
            <input
              value={maxFilter}
              onChange={
                maxFilter >= 0
                  ? (e) => setMaxFilter(e.target.value)
                  : setMaxFilter(0)
              }
              type="number"
              id="textMax"
              name="textMax"
            />
          
        </FiltroLabelMax>
      </FiltroContainer>
    </Container>
  );
}
