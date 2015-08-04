<?php include ('header.php');?>
<main class="main" role="main">
    <section class="banniere-fullwidth row fullwidth no-marg">
        <div class="hide-for-small slider">
          <ul class="slides">
            <li class="overlay">
              <div class="container large-6 push-3 align-vertical">
                    <h1 class="text-white uppercase text-center strong">deal room</h1>
              </div>
               <div class="bg-image-conteneur bg-parallax">
                <img alt="slide image" src="img/vent2.jpg">
              </div>
            </li>
          </ul>
        </div>
    </section>
    <section class="filtre-deal-room">
    	<form class="deal-room-form row ">
    		<ul>
    			<li>
	    			<select id="single-bsg-pilot">
					  <option value="husker"selected>Obligations</option>
					  <option value="starbuck">Starbuck</option>
					  <option value="hotdog">Hot Dog</option>
					  <option value="apollo">Apollo</option>
					</select>
				</li>
				<li>
	    			<select id="single-bsg-pilot">
					  <option value="husker"selectedselected>technologies</option>
					  <option value="starbuck">Starbuck</option>
					  <option value="hotdog">Hot Dog</option>
					  <option value="apollo">Apollo</option>
					</select>
				</li>
    			<li>
	    			<select id="single-bsg-pilot">
					  <option value="husker"selected>Trier par date de fin</option>
					  <option value="starbuck">Starbuck</option>
					  <option value="hotdog">Hot Dog</option>
					  <option value="apollo">Apollo</option>
					</select>
				</li>
    		</ul>
    		<hr/>
    		<div class="large-6 columns">
    			<span class="label">Taux d'intérêt</span><br/>
					  		
					</div>
    		<div class="large-6 columns">
    			<span class="label">Maturité</span><br/>
    		</div>
    	</form>
    </section>
    <hr class="fake-box-shadow"/>
    <section class="row projets">
	    <?php include ('article-projet-fullwidth.php');?>
	    <?php include ('article-projet-fullwidth.php');?>
	    <?php include ('article-projet-fullwidth.php');?>
	    <?php include ('article-projet-fullwidth.php');?>
	    <?php include ('article-projet-fullwidth.php');?>
	    <?php include ('article-projet-fullwidth.php');?>
	    <?php include ('article-projet-fullwidth.php');?>
	    <?php include ('article-projet-fullwidth.php');?>
    </section>
</main>
<?php include ('footer.php');?>