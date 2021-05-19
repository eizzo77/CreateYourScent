import react from "react";
import "./PhotoAccordion.css";

export const PhotoAccordion = () => {
    return (
        // <div className="accordion">
        <div class="container">
            <div class="ia-container">
				
					<figure>
						<img src="https://i.pinimg.com/originals/4f/36/ee/4f36ee1f2c666b44cf7f11503a50697e.jpg" alt="image01" />
						<input type="radio" name="radio-set"/>
						<figcaption><span>True Colors</span></figcaption>
						
						<figure>
							<img src="https://i.pinimg.com/originals/1b/5f/69/1b5f69f4957d327d2df1a9243f99a02a.jpg" alt="image02" />
							<input type="radio" name="radio-set" />
							<figcaption><span>Honest Light</span></figcaption>
							
							<figure>
								<img src="https://i.pinimg.com/originals/d4/54/ee/d454eef2514381ab676a260e8e410625.jpg" alt="image03" />
								<input type="radio" name="radio-set" />
								<figcaption><span>Silent Serenity</span></figcaption>
								
								<figure>
									<img src="https://s8.favim.com/orig/151121/autumn-beautiful-candles-decor-Favim.com-3613448.jpg" alt="image04" />
									<input type="radio" name="radio-set" />
									<figcaption><span>Warm Welcome</span></figcaption>
									
									<figure>
										<img src="https://i.pinimg.com/originals/06/31/89/0631897d0f62c76f31362a6997a70fdc.jpg" alt="image05" />
										<input type="radio" name="radio-set" />
										<figcaption><span>CREATE YOUR SCENT NOW</span></figcaption>
										
										<figure>
											<img src="https://i.pinimg.com/564x/33/82/9f/33829f987042468a9087219d379a6522.jpg" alt="image06" />
											<input type="radio" name="radio-set" />
											<figcaption><span>Lovely Midnight</span></figcaption>
								
											<figure>
												<img src="https://i.pinimg.com/564x/9b/e3/ed/9be3ed46900016c9a5c9c0170afafbff.jpg" alt="image07" />
												<input type="radio" name="radio-set" />
												<figcaption><span>Illuminated Darkness</span></figcaption>											

												<figure>
													<img src="https://i.pinimg.com/564x/9e/8a/b4/9e8ab4c4ff6f7465db028415a5e2ab02.jpg" alt="image08" />
													<input id="ia-selector-last" type="radio" name="radio-set" />
													<figcaption><span>Happy Child</span></figcaption>

                                                    <figure>
													<img src="https://i.pinimg.com/564x/9e/8a/b4/9e8ab4c4ff6f7465db028415a5e2ab02.jpg" alt="image08" />
													<input id="ia-selector-last" type="radio" name="radio-set" />
													<figcaption><span>Happy Child</span></figcaption>
												</figure>

												</figure>
												
											</figure>
								
										</figure>	
											
									</figure>	
										
								</figure>
									
							</figure>
							
						</figure>
						
					</figure>
					
				</div>
        </div>
        

    );
}