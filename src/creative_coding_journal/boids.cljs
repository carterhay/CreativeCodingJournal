(ns creative-coding-journal.boids
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]))

(def speed 0.55)
(def repulse-strength 0.25)
(def repulse-distance 50)

(def emptyV {:x 0 :y 0})


(defn vvop [f v1 v2]
  ; Perform a funciton on each member of two vectors
  {:x (f (:x v1) (:x v2))
   :y (f (:y v1) (:y v2))})


(defn vsop [f v s]
  ; Perform a function on each member of a vector and a scalar
  {:x (f (:x v) s)
   :y (f (:y v) s)})


(defn vop [f v]
  ; Perform a function on each member of a vector
  {:x (f (:x v))
   :y (f (:y v))})


(defn calculate-new-position [position velocity]
  (vvop + position velocity))


(defn calculate-displacement [pos des]
  (vvop - des pos))


(defn calculate-velocity [displacement speed]
  (vsop * displacement speed))


(defn get-mouse-position []
  {:x (q/mouse-x) :y (q/mouse-y)})


(defn calculate-distance [v1 v2]
  (reduce +
          (vals (vop Math/abs (vvop - v1 v2)))))


(defn positions [state]
  (map #(:position %) state))


(defn velocities [state]
  (map #(:velocity %) state))


(defn random-boid []
  {:position {:x (rand-int 500) :y (rand-int 500)}
    :velocity {:x 0 :y 0}})


(defn average-vs [vs]
  (vsop / 
    (reduce (fn [x y] (vvop + x y)) vs)
    (count vs)))


(defn setup []
  (q/frame-rate 30)
  (q/color-mode :rgb)
  (let [state
        (repeatedly 50 random-boid)]
    state))


(defn debug [val]
  (print val)
  val)


(defn update-point [state p]
  (let [position (:position p)
        velocity (:velocity p)]
    {:position (calculate-new-position position velocity) 
     :velocity (calculate-velocity
                 (reduce (fn [x y] (vvop + x y))
                      [velocity
                       ; Average mass
                       (vsop / (calculate-displacement position (average-vs (positions state))) 100)
                       ; Average velocity
                       (vsop / (vvop - (average-vs (velocities state)) velocity) 10)
                       ; Keep distance
                       (vsop *
                             (reduce (fn [x y] (vvop - x y)) emptyV
                                     ; This displacement seems backwards. Spend some time to grok
                                     (map #(calculate-displacement position %)
                                          (filter
                                            #(< (calculate-distance % position) repulse-distance)
                                            (positions state))))
                             repulse-strength)
                       (vsop / (calculate-displacement position (get-mouse-position)) 100)])
                 speed)}))


(defn draw-point [p]
  (q/point (get-in p [:position :x]) (get-in p [:position :y])))


(defn update-state [state]
  (map (partial update-point state) state))


(defn draw-state [state]
  ; Clear the sketch by filling it with light-grey color.
  (q/background 240)
  (q/stroke-weight 10)
  (q/stroke 0 0 0)
  ; Set circle color.
  (q/fill (:color state) 255 255)
  (run! draw-point state))


(defn getWidth[]
  (. js/window.screen -availWidth))


(defn getHeight[]
  (. js/window.screen -availHeight))


(defn ^:export run-sketch []
  (q/defsketch creative-coding-journal
    :host "creative-coding-journal"
    :size [(/ (getWidth) 1.5) (/ (getHeight) 1.5)]
    :setup setup
    :update update-state
    :draw draw-state
    :middleware [m/fun-mode]))
