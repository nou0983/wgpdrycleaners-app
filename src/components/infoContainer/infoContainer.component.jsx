import Wrapper from "./infoContainer.styles";

const InfoContainer = () => {
  return (
    <Wrapper>
      <li class="delivery">
        To Be Delivered By formattedDate after 5pm (If it falls on Public
        Holidays, it will be on the following business day)
      </li>
      <li>* Order under $50 will occur delivery charge of $10</li>
      <li>
        * Prices are indicative only. Prices may vary depending on sizes,
        fabrics, colours, condition and stains
      </li>
      <li>
        * Delivery date is after 3 working days from the pick up date, except
        for an express service
      </li>
      <li>
        * Pick up &amp; Delivery: Mon~Fri after 5pm, except public holidays and
        25th Dec ~ 2nd Jan
      </li>
      <li>
        * Press only is 70% of the drycleaning price except shirts which are $7
        <br />
      </li>
      <li>* If you have queries, please email to info@wgpdrycleaners.co.nz</li>
    </Wrapper>
  );
};

export default InfoContainer;
