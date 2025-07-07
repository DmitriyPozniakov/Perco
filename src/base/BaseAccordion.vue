<template>
  <div class="container">
    <button class="accordion">About</button>
    <div class="panel">
      <p>
        This product is crafted with premium materials and designed to offer
        both functionality and elegance. Its clean lines, modern form, and
        attention to detail make it a perfect addition to any space. Whether
        you're enhancing your home or office, this item brings a balance of
        durability and aesthetic appeal.
      </p>
    </div>

    <button class="accordion">Care Instructions</button>
    <div class="panel">
      <p>
        To preserve the quality and longevity of your product, we recommend
        regular gentle cleaning with a soft, damp cloth. Avoid the use of harsh
        chemicals or abrasive materials. For fabric elements, use mild detergent
        when necessary and follow specific care tags. Store in a dry area away
        from direct sunlight.
      </p>
    </div>

    <button class="accordion">Shipping & Returns</button>
    <div class="panel">
      <p>
        We offer fast and reliable shipping on all orders. Standard delivery
        takes 3–7 business days. Express options are available at checkout. If
        you're not satisfied with your purchase, you may return it within 14
        days of delivery in its original condition for a full refund or
        exchange. Please refer to our full return policy for details.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    const acc = document.getElementsByClassName("accordion");
    for (let i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        const panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });
    }
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 56rem;
}

.accordion {
  background-color: #eee;
  color: #302a18;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  transition: 0.4s;
  border-radius: 13px;
  text-transform: uppercase;
  font-family: 'SFR-regular';
  font-size: 2rem;
  font-weight: 300;
}

.active,
.accordion:hover {
  background-color: #ccc;
}

.accordion:after {
  content: "\002B";
  color: #777;
  font-weight: bold;
  float: right;
  margin-left: 5px;
}

.active:after {
  content: "\2212";
}

.panel {
  padding: 0 18px;
  background-color: white;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.2s ease-out;
  color: #302a18;
  font-family: "SFR-regular";
  font-size: 1.6rem;
  font-weight: 300;
}
</style>